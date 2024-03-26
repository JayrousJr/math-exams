import MarkdownEditor from "@uiw/react-markdown-editor";
import MathTex from "react-mathtex";
function MarkDown(props) {
    const math =
        "Dada una función <$>f: A \\longrightarrow \\mathbb{R}</$>, decimos que el límite de <$>f</$> en el punto <$>x_0 \\in \\mathbb{R}</$> existe y es igual a <$>L</$> si se cumple que: \n <$>\\forall \\epsilon >0: \\exist \\delta >0: \\hspace{0.2cm} 0 < |x-x_0| < \\delta \\hspace{0.2cm} \\textrm{  y  } x \\in A \\hspace{0.2cm} \\Longrightarrow |f(x)-L| < \\epsilon</$$> \n En caso de que dicho límite exista, lo escribimos como: <$>\\displaystyle{\\lim_{x \\rightarrow x_0}} f(x) = L</$>.";
    return (
        <>
            <MarkdownEditor.Markdown
                className="markdown"
                source={props.question}
                enablePreview={true}
            />

            {/* <MathTex classname="w-full border-4 border-sky-500 bg-sky-950 text-lg text-sky-100 my-10 p-6">
                {math}
            </MathTex> */}
            {/* <div dangerouslySetInnerHTML={{ __html: props.question }} /> */}
        </>
    );
}

export default MarkDown;
