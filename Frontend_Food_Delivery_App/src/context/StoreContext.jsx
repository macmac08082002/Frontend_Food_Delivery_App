import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

// Tạo một ngữ cảnh (context) mới
export const StoreContext = createContext(null);

// Tạo một thành phần (component) cung cấp ngữ cảnh
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Sử dụng toán tử nullish coalescing để xác định giá trị mặc định là 0
    }));
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1,
      }));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  // Khởi tạo giá trị mặc định cho ngữ cảnh, ở đây có thể là các dữ liệu, hàm, hoặc state
  const contextValue = {
    // Bạn có thể thêm các dữ liệu, hàm, hoặc state vào đây
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  // Trả về một phần tử JSX, sử dụng Provider của ngữ cảnh để cung cấp giá trị cho toàn bộ ứng dụng
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

// Xuất ra thành phần cung cấp ngữ cảnh để sử dụng trong ứng dụng
export default StoreContextProvider;
