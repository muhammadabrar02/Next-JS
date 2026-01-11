import { NextRequest, NextResponse } from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';


async function isAdmin(userId: string) { 
    await clerkClient.users.getUser(userId)
    const user = await clerkClient.users.getUser(userId); 
    return user.privateMetadata.role === 'admin'; 

}

