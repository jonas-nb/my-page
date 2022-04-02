import React from "react";

import { FaQuoteLeft } from "react-icons/fa";
const Phrase = () => {
  return (
    <div className="m-auto mt-5 h-36 w-11/12 bg-slate-200 rounded shadow-lg">
      <section>
        <article>
          <h1>
            <FaQuoteLeft className="text-black text-4xl p-2" />
          </h1>
          <blockquote>
            <p className="text-center font-mono font-semibold ">
              Qualquer tecnologia suficientemente avançada é indistinta de
              magia.
            </p>
            <q className="font-mono text-xs text-right block mt-1 mr-1">
              Arthur C. Clarke
            </q>
          </blockquote>
        </article>
      </section>
    </div>
  );
};

export default Phrase;
