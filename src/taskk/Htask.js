import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";

function HomePage() {

  const [products, setProducts] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSelected, setIsSelected] = useState("");
   
  const handleToggle = (id) => {
    console.log("prd-id", id);
    setIsSelected(id);
  };
    const featuredProducts = products;

    const fetchProducts = async () => {
      const response = await axios
        .get("https://www.googleapis.com/books/v1/volumes?q=HTML5")
        .catch((err) => {
          console.log("Err: ", err);
          setIsLoaded(false);
        });
        setProducts(response.data.items);
        setIsLoaded(true);
        console.log("--responce data--", response.data.items);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);

    return (
        <Fragment>
             <p className="lorem_txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            {isLoaded ? (
                <div className="container_inner">
                    <div className="lest_side">
                      {products.map((product, index) => (
                          <div className={`card ${(product.id === isSelected ? " is-selected" : "")}`} onClick={() => handleToggle(product.id)} key={index}>
                              <div className="card_img">
                                <img src={product.volumeInfo.imageLinks.thumbnail} alt="Jeans" style={{width:"100%"}} />
                              </div>
                              <div className="card_details">
                                <h1>{product.volumeInfo.title}</h1>
                                <p className="price">Authors: {product.volumeInfo.publisher}</p>
                                <p className="price">Pages: {product.volumeInfo.pageCount}</p>
                                {/* <p>{product.volumeInfo.description}</p> */}
                                <p className="descript_txt">
                                  {product.volumeInfo.description.length > 140 ?
                                    `${product.volumeInfo.description.substring(0, 140)}...` : product.volumeInfo.description
                                  }
                                </p>
                              </div>
                          </div>
                      ))}
                    </div>

                    <div className="right_side">
                      <h4>Featured</h4>
                        {featuredProducts.map((product, index) => (
                              <div className="card"  key={index}>
                              <div className="card_details">
                                <h1>{product.volumeInfo.title}</h1>
                                <p className="price">Authors: {product.volumeInfo.publisher}</p>
                                <p className="price">Pages: {product.volumeInfo.pageCount}</p>
                                {/* <p>{product.volumeInfo.description}</p> */}
                                <p className="descript_txt">
                                  {product.volumeInfo.description.length > 140 ?
                                    `${product.volumeInfo.description.substring(0, 140)}...` : product.volumeInfo.description
                                  }
                                </p>
                              </div>
                              <div className="card_img">
                                <img src={product.volumeInfo.imageLinks.thumbnail} alt="Jeans" style={{width:"100%"}} />
                              </div>
                            </div>
                        ))}
                    </div>
                </div>

                    
                ) : (
                    <div className="loading_txt">Loading</div>
                )
            }
        </Fragment>
      );
}

export default HomePage;
