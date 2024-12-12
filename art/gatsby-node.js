exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
  
    createTypes(`
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
      }
  
      type Frontmatter {
        date: Date @dateformat
      }
    `);
  };
  