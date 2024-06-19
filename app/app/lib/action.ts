'use server'
import {z} from 'zod'
import{ sql }from "@vercel/postgres"
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'



const FormSchema = z.object(
    {
        id:z.string(),
        playerId:z.string({
            invalid_type_error:'Please select a player'
        }),
        amount:z.coerce.number().gt(0,{message:'please enter an amount greater than $0'}),
        status:z.enum(['active','cancelled'],{
            invalid_type_error:'please select an subscribe status'
        }),
        date:z.string(),
    }
)

const createSubscribeData = FormSchema.omit({id:true,date:true})

export type State ={
    errors?:{
        playerId?:string[];
        amount?:string[];
        status?:string[];
    }
    message?:string|null;
}
export async function createSubscribe(prevState:State,formData:FormData){

    const validatedFields = createSubscribeData.safeParse({
        playerId:formData.get('playerId'),
        amount:formData.get('amount'),
        status:formData.get('status')
    })
    if(!validatedFields.success){
        return{
            errors:validatedFields.error.flatten().fieldErrors,
            message:'Missing fields, failed to create'
        }
    }

    const {playerId,amount,status} = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0]
    try{
        await sql`
            INSERT INTO subscribers(user_id,amount,status,date)
            VALUES(${playerId},${amountInCents},${status},${date})
        `;
    }catch(error){
        return {
            message:'databse error:Failed to create Subscribes'
        }
    }
    revalidatePath('/dashboard/subscribers')
    redirect('/dashboard/subscribers')
}

const updateSubscription = FormSchema.omit({date:true,id:true})




export async function UpdateSubscription(id:string,prevState:State,formData:FormData){
    const validatedFields =  updateSubscription.safeParse({
        playerId:formData.get('playerId'),
        amount:formData.get('amount'),
        status:formData.get('status')
    })

    

    if(!validatedFields.success){
        return {
            errors:validatedFields.error.flatten().fieldErrors,
            message:'Missing Fields, Failed to Update'
        }
    }
    const {playerId,amount,status} = validatedFields.data;
    const amountInCents = amount*100
    
    try{
        await sql`
        UPDATE subscribers SET user_id=${playerId},amount=${amountInCents},status=${status}
        WHERE id = ${id}
        `;

    }catch(error){
        return {message:'Database Error:Failed to update'}
    }
    revalidatePath('dashboard/subscribers');
    redirect('/dashboard/subscribers');
}

export async function deleteSubscription(id:string){
    try{
        await sql `DELETE FROM subscribers WHERE id=${id}`;
        revalidatePath('/dashboard/subscribers')
        return {message:'Delete subscription'}
    }catch(error){
        return {message:'Database Error:Failed to Delete subscription'}
    }
}