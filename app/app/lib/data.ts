//fetch data from db
import {sql} from '@vercel/postgres'
import { PlayerTable } from './definition';
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


