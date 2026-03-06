import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [introduce, setIntroduce] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onSetBirth = (e) => {
        setBirth(e.target.value);
    }

    const onSetCountry = (e) => {
        setCountry(e.target.value);
    }

    const onIntroduce = (e) => {
        setIntroduce(e.target.value);
    }

    return (
        <div>
            <div>
                <input
                    value={name}
                    onChange={onChangeName}
                    placeholder="이름"
                />
            </div>

            <div>
                <input
                    value={birth}
                    onChange={onSetBirth}
                    type="date"
                ></input>
            </div>

            <div>
                <select value={country} onChange={onSetCountry}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="bg">방글라데시</option>
                </select>
            </div>

            <div>
                <textarea
                    name="자기소개"
                    value={introduce}
                    onChange={onIntroduce}/>
                {introduce}
            </div>
        </div>
    );
};

export default Register;