import React from "react";
import EditorTemplate from "../components/editor/EditorTemplate/EditorTemplate";
import EditorPaneContainer from "../components/editor/EditorPaneContainer";
import PreviewPaneContainer from "../components/editor/PreviewPaneContainer";
import EditorHeaderContainer from "../components/editor/EditorHeaderContainer";

const EditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeaderContainer />}
      editor={<EditorPaneContainer />}
      preview={<PreviewPaneContainer />}
    />
  );
};

export default EditorPage;
