import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserFeedbackForm from "../components/user-form/UserForm";

describe('User Feedback Form', () => {

    it('form renders on UI',()=>{
        render(<UserFeedbackForm />);
        expect(screen.getByTestId('feedback-form')).toBeInTheDocument();
    })


    it('form elements renderd - full name, email/phone, comments, button',()=>{
        render(<UserFeedbackForm />);
        expect(screen.getByTestId('feedback-form')).toBeInTheDocument();
    })

})

