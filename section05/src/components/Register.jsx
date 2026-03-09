import { useState } from "react";
import { useRef } from "react";

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        introduce: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();
    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [introduce, setIntroduce] = useState("");

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = (e) => {
        if(input.name === ""){
            //이름을 입력하는 DOM요소에 포커스를 줘야함
            console.log(inputRef.current);
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <button onClick={() => {
                refObj.current++;
                console.log(refObj.current);
            }}>
                클릭
            </button>
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder="이름"
                />
            </div>

            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type="date"
                ></input>
            </div>

            <div>
                <select 
                name="country"
                value={input.country} 
                onChange={onChange}
                >
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="bg">방글라데시</option>
                </select>
            </div>

            <div>
                <textarea
                    name="introduce"
                    value={input.introduce}
                    onChange={onChange}/>
                {input.introduce}
            </div>

            <button onClick={onSubmit}>
                제출
            </button>
        </div>
    );
};

export default Register;