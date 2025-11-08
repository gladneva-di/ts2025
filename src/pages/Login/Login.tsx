import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/input/Input';
import styles from './Login.module.css';
import { useState, type FormEvent } from 'react';
import { PREFIX } from '../../helpers/API';
import axios, { AxiosError } from 'axios';
import type { LoginResponce } from '../../interfaces/auth.interface';

export type LoginForm = {
    email: {
        value: string
    };
    password: {
        value: string
    }
}

export function Login() {

    const [error, setError] = useState<string | null>();

    const navigate = useNavigate();


    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        console.log(e);
        const target = e.target as typeof e.target & LoginForm;
        const { email, password } = target;
        console.log(email.value);
        console.log(password.value);
        await sendLogin(email.value, password.value);
    };


    const sendLogin = async (email: string, password: string) => {
        try {
            const { data } = await axios.post<LoginResponce>(`${PREFIX}/auth/login`, {
                email,
                password
            });
            console.log(data);
            localStorage.setItem('jwt', data.access_token);
            navigate('/ts2025');
        } catch (e) {
            if (e instanceof AxiosError) {
                console.log(e);
                setError(e.response?.data.message);
            }
        }
    }


    return <div className={styles['login']} >
        <Headling>Вход</Headling>
        {error && <div className={styles['error']}>{error}</div>}
        <form className={styles['form']} onSubmit={submit}>
            <div className={styles['field']}>
                <label htmlFor="email">Ваш email</label>
                <Input id="email" name='email' placeholder='Email' />
            </div>
            <div className={styles['field']}>
                <label htmlFor="password">Ваш пароль</label>
                <Input id="password" name='password' type="password" placeholder='Пароль' />
            </div>
            <Button appearance="big">Вход</Button>
            <div className={styles['links']}>
                <div>Нет акканута?</div>
                <Link to="/ts2025/auth/register">Зарегистрироваться</Link>
            </div>
        </form>
    </div>
}