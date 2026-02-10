export  default function TextButton(params) {
    console.log(params)

    let obj = {
        name: "test",
        age: 42,
        address: "127.0.0.1",
        phone: "0123456789"
    }
    console.log(obj.name)
    console.log(obj.age)
    console.log(obj.address)
    console.log(obj.phone)

    let { name, age } = obj

    console.log(name)
    console.log(age)

    return (
        <>
            <button type='button'>
                {params.label}
            </button>
        </>
    )
}