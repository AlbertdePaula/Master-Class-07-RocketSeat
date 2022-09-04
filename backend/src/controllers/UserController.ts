import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    { name: 'Albert', email: 'albert_depaula@yahoo.com.br' }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Albert',
                email: 'alguem@pessoas.com.br'
            },
            message: {
                subject: 'Bem-vindo ao sistema!',
                body: 'Vc conseguiu fazer man!'
            }
        });

        return res.send();
    }
};
