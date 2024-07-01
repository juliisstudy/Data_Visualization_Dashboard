//fetch data from db
import {sql} from '@vercel/postgres'
import { PlayerField, PlayerTable,SubscriberTable,SubscriptionsForm,Revenue } from './definition';
import {formatCurrency} from './utils';
import { unstable_noStore as noStore } from 'next/cache';


export async function fetchFilteredPlayers(query:string){
    noStore();
    try{
      const data = await sql<PlayerTable>`
        SELECT
		  players.id,
		  players.name,
		  players.email,
		  players.image_url,
		  COUNT(subscribers.user_id) AS total_subscribe,
		  COUNT(subscribers.status = 'active') AS total_active,
          COUNT(subscribers.status = 'cancelled') AS total_cancelled,
          SUM(CASE WHEN subscribers.status = 'active' THEN subscribers.amount ELSE 0 END) AS total_paid
		FROM players
		LEFT JOIN subscribers ON players.id = subscribers.user_id
		WHERE
		  players.name ILIKE ${`%${query}%`} OR
        players.email ILIKE ${`%${query}%`}
		GROUP BY players.id, players.name, players.email, players.image_url
		ORDER BY players.name ASC   
      `;
      const players = data.rows.map((player)=>({
        ...player,
        total_paid:formatCurrency(player.total_paid)
      }))
      return players
    }catch(err){
        console.error('Database error',err);
        throw new Error('Fail to fetch player table');
    }
}

const ITEMS_PER_PAGE =6

export async function fetchSubscribersPages(query:string){
  noStore();
  try{
    const count = await sql `SELECT COUNT(*)
    FROM subscribers
    JOIN players ON subscribers.user_id = players.id
    WHERE
      players.name ILIKE ${`%${query}%`} OR
      players.email ILIKE ${`%${query}%`} OR
      subscribers.amount::text ILIKE ${`%${query}%`} OR
      subscribers.date::text ILIKE ${`%${query}%`} OR
      subscribers.status ILIKE ${`%${query}%`}
    `
    const totalPages = Math.ceil(Number(count.rows[0].count)/ITEMS_PER_PAGE)
    
    return totalPages; 
  }catch(error){
    console.error('Database Error',error)
    throw new Error('Failed to fetch total number of subscribers')
  }

}

export async function fetchFilteredSubscribers(query:string,currentPage:number){
  noStore()
  const offset = (currentPage -1)*ITEMS_PER_PAGE;

  try{
    const subscribers = await sql<SubscriberTable>`
   SELECT subscribers.id,subscribers.user_id,players.name,players.email,players.image_url,
    subscribers.date,subscribers.amount,subscribers.status 
    FROM subscribers JOIN players ON subscribers.user_id=players.id
    WHERE
      players.name ILIKE ${`%${query}%`} OR
      players.name ILIKE ${`%${query}%`} OR
      subscribers.amount::text ILIKE ${`%${query}%`} OR
      subscribers.status ILIKE ${`%${query}%`}
    ORDER BY subscribers.date DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `
    return subscribers.rows;

  }catch(err){
    console.error('Database Error',err)
    throw new Error('Failed to fetch total number of subscribers')
  }
}


export async function fetchPlayers() {
  try{
    const data = await sql<PlayerField>`
      SELECT id,name FROM players ORDER BY name ASC
    `;
    const players = data.rows;
    return players;
  }catch(err){
    console.error('Database Error:',err)
    throw new Error('Failed to fetch all players')
  }
}

export async function fetchSubscriptionsById(id:string) {
  noStore();
  try{
    const data = await sql<SubscriptionsForm>`
    SELECT subscribers.id,
          subscribers.user_id,
          subscribers.amount,
          subscribers.status
    FROM subscribers
    WHERE subscribers.id = ${id}
    `;
    const subscriptions = data.rows.map((subscription)=>({
      ...subscription,
      amount:subscription.amount/100
    }))
    return subscriptions[0]
  }catch(error)
{
  console.error('Database Error:',error)
  throw new Error('Failed to fetch subscriptions')
}  
}

export async function fetchRevenue(){
  noStore();
  try{
    const data = await sql<Revenue>`SELECT * FROM revenue`;
    return data.rows;
  }catch(error){
    console.error('Database Error:',error)
    throw new Error('Failed to fetch revenue data')
  }
}




export async function fetchCardData(){
  noStore()
  try{
    const subscriptionsCountPromise = sql`SELECT COUNT(*) FROM subscribers`;
    const playersCountPromise = sql`SELECT COUNT(*) FROM players`;
    const activeCountPromise = sql`SELECT COUNT(*) FROM subscribers WHERE status='active'`;
    const totalRevenuesPromis = sql`SELECT SUM(CASE WHEN status='active'THEN amount ELSE 0 END) AS "active" 
    FROM subscribers`;
    
    const data = await Promise.all([subscriptionsCountPromise,playersCountPromise,activeCountPromise,totalRevenuesPromis]);

      const numberOfSubscriptions = Number(data[0].rows[0].count ?? '0');
      const numberOfPlayers = Number(data[1].rows[0].count??'0');
      const numberOfActiveSubscriptions = Number(data[2].rows[0].count??'0');
      const totalRevenues = formatCurrency(data[3].rows[0].active ?? '0');

    return {
      numberOfSubscriptions,
      numberOfPlayers,
      numberOfActiveSubscriptions,
      totalRevenues
    }
      }catch(error){
        console.error('Database Error:',error)
        throw new Error('Failed to fetch card data');
      }
}


export async function fetchNumberOfPlayer(){
  noStore();
  try{
    const data = await sql `SELECT COUNT(*) FROM players`;
    const numberOfPlayers = Number(data.rows[0].count ?? '0');

    return numberOfPlayers;
  }catch(error){
    console.error('Database Error:',error)
    throw new Error('Failed to fetch numberOfPlayers')
  }

}