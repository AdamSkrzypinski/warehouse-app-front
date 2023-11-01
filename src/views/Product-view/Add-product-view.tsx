import React, {useState} from "react";
import './Add-product-vew.scss'
import {CreateProductDto} from "../../types/product";

export const AddProductView = () => {
    const [product, setProduct] = useState<CreateProductDto>({
        name: '',
        measure: '',
        count: 0,
    })

    const sendForm = (e: React.SyntheticEvent) => {
        e.preventDefault()
        console.log(product)
    }

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct(product => ({
            ...product,
            [e.target.name]: e.target.value
        }))

    }

    return <div className={'add-product'}><h2>Dodaj produkt</h2>
        <form onSubmit={sendForm}>
            <label>
                Nazwa:
                <input
                    type={"text"}
                    name={'name'}
                    value={product.name}
                    onChange={change}
                />
            </label>

        </form>
    </div>
}