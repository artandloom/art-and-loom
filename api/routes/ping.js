import { Router } from 'express';

const router = Router();

router.use('/ping', (_req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(
        JSON.stringify({
            status: 'success',
            message: 'Pong',
        })
    )
})

export default router;
