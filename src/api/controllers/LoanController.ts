import { Request, Response } from "express";

export class LoanController {
    
    public  getLoans = async (req: Request, res: Response): Promise<any> => {
        return res.send('Loans');
    }

    public  getLoanByID = async (req: Request, res: Response): Promise<any> => {
        return res.send('Loan by Id');
    }

    public createLoan = async (req: Request, res: Response): Promise<any> => {
        return res.send('Create Loan');
    }

    public updateLoan = async (req: Request, res: Response): Promise<any> => {
        return res.send('Update Loan');
    }

    public deleteLoan = async (req: Request, res: Response): Promise<any> => {
        return res.send('Delete Loan');
    }
} 