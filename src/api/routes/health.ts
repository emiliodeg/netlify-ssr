import { Request, Response, Router } from 'express';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: process.env['NODE_ENV'] || 'development'
    });
});
export default router;