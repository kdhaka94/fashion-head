export const modules = {
  toolbar: {
    container: "#toolbar",
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  }
};

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="bullet" />
    </span>
    <span className="ql-formats">
      <button className="ql-image" />
    </span>
    </div>
);

export default QuillToolbar;
