import React from "react";

function SkillChip(props) {
  const { name, icon, color } = props;
  return (
    <div
      style={{
        paddingTop: "var(--spacing-1)",
        paddingBottom: "var(--spacing-1)",
        paddingLeft: "var(--spacing-2)",
        paddingRight: "var(--spacing-2)",
        border: "3px solid",
        display: "flex",
        alignItems: "center",
        backgroundColor: color ? color : null
      }}
    >
      <span style={{ marginRight: "var(--spacing-1)" }}>{name}</span>
      {icon}
    </div>
  );
}

export default SkillChip;
