import React, { useState } from "react";
import styled from "styled-components";
import "../Styling/GlobalStyle.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryDescription, setCategoryDescription] = useState("");

  const categories = [
    {
      name: "I-Smart School Management",
      description:
        "ERP Software for Schools & Colleges to handle Inquiry, Admission, Fee Management, Library, Attendance, Time Table, Certificates, ID Card, Reminder Letters, Demand Register, SMS, Birthday, Stock, Financial Accounting & more.. Now with Mobile App.",
    },
    {
      name: "Biz Plus-Accounting Software",
      description:
        "A Complete Business ERP Software that caters to every need of modern day business tycoons. Designed to help you eliminate all the complexities in business automation like organizing your Financial Accounts.",
    },
    {
      name: "Hotel Management Software",
      description:
        "GST Ready ERP Software for Hotels and Restaurants with K.O.T. Management, Table Service, Check in, Check Out, Stock Management, Production. Booking Dashboard, Stay view, Police Station Report. Very Easy to operate.",
    },
    {
      name: "Institute Management Software",
      description:
        "Institute Management Software to handle daily inquiries and student records with Financial details, Fees collection / Accounting Management, Easy Banking, Interest Calculation, Sale/ Purchase, Admission with Photo. Now With Mobile App.",
    },
    {
      name: "Dairy ERP",
      description:
        "The software has been especially designed for milk collection centres at village level to handle their day to day accounts and dairy activities. It's just the perfect tool for the processes in your Dairy, and making them perform to deliver the best results for your business.",
    },
    {
      name: "Sabzi Mandi ERP",
      description:
        "Sabzi Mandi ERP is Intelligence and integrated solution for Mandi Industry. E.R.P. Software For Sabzi Mandi Commission Agents with Supplier / Customer Bills, Rate / Weight Adjustment, Stock Management, Accounts, Crates, Ugrahi Register and much more.",
    },
  ];

  const images = [
    {
      id: 1,
      category: "I-Smart School Management",
      src: "https://www.sunrisewebsolution.com/Uploads/21192017041915school-soft.jpg",
      alt: "I-Smart School Management",
    },
    {
      id: 2,
      category: "Biz Plus-Accounting Software",
      src: "https://www.sunrisewebsolution.com/Uploads/21242017042440accounting-soft.jpg",
      alt: "Biz Plus - Accounting Software",
    },
    {
      id: 3,
      category: "Hotel Management Software",
      src: "https://www.sunrisewebsolution.com/Uploads/21452017044524hotel.jpg",
      alt: "Hotel Management Software",
    },
    {
      id: 4,
      category: "Institute Management Software",
      src: "https://www.sunrisewebsolution.com/Uploads/21532017045351institute.jpg",
      alt: "Institute Management Software",
    },
    {
      id: 5,
      category: "Dairy ERP",
      src: "https://www.sunrisewebsolution.com/Uploads/21332017053351Dairy-ERP.jpg",
      alt: "Dairy ERP",
    },
    {
      id: 6,
      category: "Sabzi Mandi ERP",
      src: "https://www.sunrisewebsolution.com/Uploads/21072017060728mandi-erp.jpg",
      alt: "Sabzi Mandi ERP",
    },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const selectedCategoryData = categories.find(
      (cat) => cat.name === category
    );
    setCategoryDescription(selectedCategoryData.description);
  };

  return (
    <StyledFilterGallery>
      <h2 className="h2_heading">Our Products</h2>
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryChange(category.name)}
            className={selectedCategory === category.name ? "selected" : ""}
          >
            {category.name.toUpperCase()}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <div className="product-details">
          <div className="image">
            {images
              .filter((image) => image.category === selectedCategory)
              .map((image) => (
                <img key={image.id} src={image.src} alt={image.alt} />
              ))}
          </div>
          <div className="description">
            <p>{categoryDescription}</p>
          </div>
        </div>
      )}
    </StyledFilterGallery>
  );
};

// const StyledFilterGallery = styled.div`
//   text-align: center;

//   h2 {
//     margin-bottom: 80px;
//   }

//   .filter-buttons button {
//     margin: 5px;
//     padding: 8px 16px;
//     border: 1px solid #ccc;
//     border-radius: 20px;
//     color: black;
//     background-color: white;
//     cursor: pointer;
//   }

//   .filter-buttons button:hover {
//     color: black;
//     background-color: skyblue;
//   }

//   .filter-buttons button.selected,
//   .filter-buttons button.selected:hover {
//     color: #black;
//     background-color: aqua;
//   }

//   .product-details {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     margin-top: 20px;
//   }

//   .image {
//     flex: 1;
//     margin-right: 50px;
//   }

//   .image img {
//     max-width: 100%;
//     height: 15rem;
//     border-radius: 20px;
//     margin-bottom: 20px;
//     margin-left: 25px;
//   }

//   .description {
//     flex: 2;
//     text-align: left;
//   }
// `;

const StyledFilterGallery = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 80px;
  }

  .filter-buttons {
    margin-bottom: 20px;
  }

  .filter-buttons button {
    margin: 5px;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    color: black;
    background-color: white;
    cursor: pointer;
  }

  .filter-buttons button:hover {
    color: black;
    background-color: skyblue;
  }

  .filter-buttons button.selected,
  .filter-buttons button.selected:hover {
    color: #black;
    background-color: skyblue;
  }

  .product-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px auto; /* Center the product details */
    max-width: 800px; /* Limit the maximum width */
  }

  .image {
    flex: 1;
    margin-right: 20px;
    text-align: center; /* Center the images */
  }

  .image img {
    max-width: 100%;
    height: 250px;
    border-radius: 20px;
  }

  .description {
    flex: 1;
    text-align: center;
    margin-top: 20px; /* Add margin to separate from image */
  }

  @media screen and (max-width: 750px) {
    .product-details {
      flex-direction: column;
        padding: 0 20px;
      }
    }

    .image {
      margin-right: 0;
    }
  }

  @media screen and (min-width: 751px) {
    .image {
      padding: 10px;
    }

    .description {
      padding: 0 20px;
    }
  }
`;

export default Products;
