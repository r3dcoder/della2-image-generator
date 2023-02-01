import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "@/styles/Della2.module.css";
import generateImage from "@/api/generateImage";
import generateText from "@/api/generateText";
import ImageDownloader from "./image-downloader";

const Dalle2 = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [divKey, setDivKey] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedText, setGeneratedText] = useState<string[]>([]);

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
        await generateText(input).then((response) => {
          setGeneratedText(response?.choices[0]?.text || '')
          console.log("response ", response);
          var text: string[] = [];
          for (var i = 0; i < response.choices.length; i++) {

            if (response?.choices[i]?.text) {
              text.push(response?.choices[i]?.text);
            }
          }

          setGeneratedText(text);
        })
        await generateImage(input, 4, "724x724").then((data: any) => {
          var newImageUrls: string[] = [];
          for (var i = 0; i < data.data.length; i++) {

            if (data?.data[i]?.url) {
              newImageUrls.push(data.data[i].url);
            }
          }
          setImageUrls(newImageUrls);
          var d = divKey + 1;
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
      <div className={styles.container + ' ' + styles.borderGradient}>
        {/* <div className="card">
          <h2 className="text-title">Generated Text</h2>
          <div className="text-description">
            {generatedText}
          </div>
        </div> */}
        <div className={  styles.card}>
          {imageUrls?.map((url: any, index) => (
            <div className={styles.grid}>
              <img
                key={index}
                className={styles.img}
                src={url}
                alt={url}
              />
              <div className = {styles.generatedText}>
                <p>{generatedText[index]}</p>
              </div>
            </div>

          ))}
        </div>
      </div>



    </div>
  );
};

export default Dalle2;
