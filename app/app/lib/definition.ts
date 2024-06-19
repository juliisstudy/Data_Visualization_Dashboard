//type definitions for data
export type User = {
    id:string;
    name:string;
    email:string;
    password:string;
}

export type Player = {
    id:string;
    name:string;
    email:string;
    image_url:string;
}
export type Subscriber ={
    id:string;
    user_id:string;
    amount:number;
    date:string;
    status:'active'|'cancelled';
}
export type Revenue ={
    month:string;
    revenue:string;
}

export type SubscriberTable = {
    id:string;
    user_id:string;
    name:string;
    email:string;
    image_url:string;
    date:string;
    amount:number;
    status:'active'|'Suspend'
}

export type PlayerTable ={
    id:string;
    name:string;
    email:string;
    image_url:string;
    total_subscribe:number;
    total_active:number;
    total_cancelled:number;
    total_paid:number;
}

export type FormattedPlayersTable ={
    id:string;
    name:string;
    email:string;
    image_url:string;
    total_subscribe:number;
    total_active:number;
    total_cancelled:number;
    total_paid:string;
}


//edit form

export type SubscriptionsForm = {
    id:string;
    user_id:string;
    amount:number;
    status:'active'|'cancelled'
}

export type PlayerField ={
    id:string;
    name:string;
}



