import { useForm } from "react-hook-form";

export default function RegisterScreen() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch("http://edu.project.etherial.fr/users")

    }

    console.log(watch("example"));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("firstname", { required: true })} />
            {errors.firstname && <span>This field is required</span>}

            <input {...register("lastname", { required: true })} />
            {errors.lastname && <span>This field is required</span>}

            <input {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}

            <input {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}

            <input {...register("password_verif", { required: true })} />
            {errors.password_verif && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
}