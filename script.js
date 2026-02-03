require.config({
  paths: {
    vs: "https://unpkg.com/monaco-editor@0.45.0/min/vs"
  }
});

require(["vs/editor/editor.main"], function () {
  const editor = monaco.editor.create(
    document.getElementById("editor"),
    {
      value: "# Welcome to CodeSpace GOD\nprint('Hello World')",
      language: "python",
      theme: "vs-dark",
      automaticLayout: true,
      fontSize: 14
    }
  );

  document.getElementById("language").addEventListener("change", (e) => {
    monaco.editor.setModelLanguage(
      editor.getModel(),
      e.target.value
    );
  });
});
