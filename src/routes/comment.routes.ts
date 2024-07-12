import { Comment, ReadComment } from '../services/comment.services'
import Express, { Request, Response } from "express"
const app = Express();

app.post('/', async (req: Request, res: Response) => {
    try {
        const { nome, comentario } = req.body;

        if (nome === undefined || comentario === undefined) {
            return res.status(400).json({
                ok: false,
                message: "Nome ou comentário não informados",
                id: 0,
                status: 400
            });
        }

        const result = await Comment(nome, comentario);
        return res.status(result.status).json(result);
    } catch (error) {
        console.error("Error processing request:", error);
        return res.status(500).json({
            ok: false,
            message: "Internal server error",
            id: 0,
            status: 500
        });
    }
});

app.get('/', async (req: Request, res: Response) => {
    const result = await ReadComment();
    res.json(result);
})
    
export default app; 