import React from "react";
import { useForm, SubmitHandler, } from "react-hook-form";
import { IFormValues} from "../../types/IFormValues";

export const AuthForm =() => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormValues>();
    const onSubmit: SubmitHandler<IFormValues> = data => {
        alert(`Your name ${data.email}`)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email",
                {
                required: "Емейл не записан",
                pattern: {
                    value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,

                    message: 'Please enter мфдшв уьфшд',

                }
                })}
                placeholder='Email'
            />
            {errors.email && (
                <div>{errors.email.message}</div>
            )}
            <input {...register("password")} />

            <div>
                <button>Send</button>
            </div>
        </form>
    );
}