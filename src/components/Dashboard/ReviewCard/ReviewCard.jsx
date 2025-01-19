import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

const ReviewCard = () => {
    return (
        <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          
        </CardContent>
        <CardFooter className="flex justify-between">
          footer
        </CardFooter>
      </Card>
    )
};

export default ReviewCard;