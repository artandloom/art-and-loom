import { Router } from 'express';

const router = Router();

router.get('/ping', (_req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(
        JSON.stringify({
            status: 'success',
            message: 'Pong',
        })
    )
})

module.exports = router;
