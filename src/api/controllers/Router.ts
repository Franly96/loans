import { Router } from 'express';
import { LoanController } from './LoanController';

const router: Router = Router();

router.get('/api/loans', new LoanController().getLoans);
router.get('/api/loans/:id', new LoanController().getLoanByID);
router.post('/api/loans/', new LoanController().createLoan);
router.put('/api/loans/:id', new LoanController().updateLoan);
router.delete('/api/loans/:id', new LoanController().deleteLoan);

export default router;