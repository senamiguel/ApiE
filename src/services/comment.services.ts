import { db } from "../config/db.config"

interface Result {
    ok: boolean,
    message: string,
    status: number,
    id: number
}

export async function Comment(nome: string, comentario: string): Promise<Result> {
    if (nome === undefined || comentario === undefined) {
        return {
            ok: false,
            message: "Nome ou comentário não informados",
            id: 0,
            status: 400
        };
    }
    try {
        const insert = await db.execute({
            sql: "INSERT INTO comentarios (nome, comentario) VALUES (?, ?)",
            args: [nome, comentario]
        });
        return {
            ok: true,
            message: "Comentário enviado com sucesso!",
            id: Number(insert.lastInsertRowid!),
            status: 201
        };
    } catch (error) {
        // Handle any errors here
        console.error("Error inserting comment:", error);
        return {
            ok: false,
            message: "Erro ao inserir o comentário",
            id: 0,
            status: 500
        };
    }
}

export async function ReadComment(){
    let selectQuery = "SELECT * FROM comentarios";
    const select = await db.execute(selectQuery);
    return select.rows;
}
