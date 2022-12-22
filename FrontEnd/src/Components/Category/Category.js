import React, { useEffect, useState } from "react";
import "./category.scss";
import axios from "../../hooks/axios";
import CategoryItem from "./CategoryItem";

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await axios.get("/categories");
                setCategories(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getCategories();
    }, []);
    return (
        categories && (
            <div className="category">
                <div className="grid wide">
                    <div className="row sm-gutter">
                        {categories.map((c, index) => (
                            <CategoryItem category={c} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        )
    );
};

export default Category;
