import { Request, Response } from 'express';
import { prisma } from '../config/prisma';

export async function getAllPosts(req: Request, res: Response) {
    try {
        const posts = await prisma.post.findMany();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
} 