import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React from 'react';

const SuccessPayment = () => {
    return (
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Payment</DialogTitle>
          <DialogDescription>
            <h1>Payment info</h1>
          </DialogDescription>
        </DialogHeader>
            <h1>Payment successfully</h1>
       
      </DialogContent>
    );
};

export default SuccessPayment;