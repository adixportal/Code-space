require.config({
  paths: {
    vs: "https://unpkg.com/monaco-editor@0.45.0/min/vs"
  }
});

require(["vs/editor/editor.main"], function () {
  let editor = monaco.editor.create(
    document.getElementById("editor"),
    {
      value: "// Welcome to GOD Mode\n",
      language: "javascript",
      theme: "vs-dark",
      automaticLayout: true
    }
  );

  document.getElementById("language").addEventListener("change", e => {
    monaco.editor.setModelLanguage(
      editor.getModel(),
      e.target.value
    );
  });
});