import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

function SectionNavigation({ 
  sections, 
  showMenu, 
  setShowMenu, 
  activeButton, 
  setActiveButton, 
  scrollAreaRef 
}) {
  const scrollToArticle = (articleId, buttonIndex) => {
    const article = document.getElementById(articleId);

    if (scrollAreaRef.current && article) {
      const viewport = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );

      if (viewport) {
        const scrollPosition = article.offsetTop;

        viewport.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });

        setActiveButton(buttonIndex);
      }
    }
  };

  return (
    <section className="hidden md:block col-span-4 w-full max-h-[90vh] px-8 py-6">
      <ScrollArea className="h-full">
        <div className="flex flex-col space-y-4">
          {sections.map((item, idx) => (
            <div key={item.index} className="flex flex-col">
              {/* Botón para la sección principal */}
              <button
                onClick={() => setShowMenu(item.index)}
                className={`flex justify-start px-6 py-2 font-roboto font-normal text-[14px] 
                  ${
                    showMenu === item.index
                      ? "border-l border-[#000000] text-grisHeading font-semibold"
                      : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                  }`}
              >
                {item.title}
              </button>

              {/* Sub-secciones, si existen */}
              {showMenu === item.index && item.subsections && (
                <div className="flex flex-col px-8 items-start space-y-5">
                  {item.subsections.map((subsection, subIdx) => (
                    <button
                      key={subsection.ref}
                      onClick={() => scrollToArticle(subsection.ref, subIdx)}
                      className={`px-3 py-2 font-roboto font-normal text-[14px] 
                        ${activeButton === subIdx ? "font-medium text-grisHeading" : "text-[#8F8F8F]"}
                      `}
                    >
                      {subsection.title}
                    </button>
                  ))}
                </div>
              )}

              {/* Botón único de la sección si no tiene subsecciones */}
              {!item.subsections && (
                <button
                  onClick={() => scrollToArticle(item.ref, idx)}
                  className={`px-3 py-2 font-roboto font-normal text-[14px] text-left
                    ${
                      activeButton === idx
                        ? "border-l border-[#000000] text-grisHeading font-semibold"
                        : "text-[#8F8F8F] hover:border-l hover:border-[#000000] hover:text-grisHeading hover:font-semibold"
                    }`}
                >
                  {item.title}
                </button>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  );
}

export default SectionNavigation;