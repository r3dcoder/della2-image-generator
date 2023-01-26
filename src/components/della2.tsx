import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "@/styles/Della2.module.css";
import generateImage from "@/api/generateImage";

const Dalle2 = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [divKey, setDivKey] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    // setIsLoading(true);
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      setImageUrls([]);
      try {
        await generateImage(input, 4, "724x724").then((data: any) => {
          var newImageUrls: string[] = [];
           for (var i = 0; i < data.data.length; i++) {
 
            if (data?.data[i]?.url) {
              newImageUrls.push(data.data[i].url);
            }
          }
          setImageUrls(newImageUrls);
          var d = divKey+1;
          setDivKey(d);
          setIsLoading(false);
        });
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
  };
 

  return (
    <div >
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          placeholder="what is the context?"
          className={styles.textarea}
          value={input}
          onChange={handleInputChange}
        />

        {!isLoading ? (
          <button className={styles.button} type="submit">
            Generate
          </button>
        ) : (
          <button className={styles.loading}>Loading</button>
        )}
      </form>
      <div>
        <div className={styles.grid}>
          {imageUrls?.map((url: any, index) => (
            <img
              key={index}
              className={styles.img}
              src={url }
              alt={url }
            />
          ))}
        </div>
      </div>
 

      
    </div>
  );
};

export default Dalle2;
