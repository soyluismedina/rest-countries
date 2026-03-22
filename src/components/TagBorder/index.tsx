import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";
import "./stylesTag.css";
import Link from "next/link";

function TagBorde({ borde }: { borde: string }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Link href={`/countryByCode/${borde}`}>
      <div className={`${darkMode ? "tagBorder" : "tagBorder tagBorderLight"}`}>
        {borde}
      </div>
    </Link>
  );
}

export default TagBorde;
