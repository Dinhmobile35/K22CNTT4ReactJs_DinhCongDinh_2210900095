import React from 'react'
export const themeContext = createContext();//tạo ngữ cảnh chia sẻ
export default function DcdUseContexx() {
    //state 
    const [theme,setTheme]= useContext('red');

  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <h2>Demo useContex</h2>
      <DcdUseContexx/>
    </div>
    </ThemeContext.Provider>
  )
}
