// Please use http://beta.json-generator.com/ to regenerate the data
[
    {
        'repeat(50, 100)': {
            id: '{{objectId()}}',
            index: '{{index()}}',
            isPublic: '{{bool()}}',
            picture: 'http://placehold.it/32x32',
            description: '{{lorem(1, "paragraphs")}}',
            created: '{{date(new Date(2014, 0, 1), new Date()).getTime()}}',
            updated: '{{date(new Date(2014, 0, 1), new Date()).getTime()}}',
            labels: [
                {
                    'repeat(0,5)': {
                        id: '{{index()}}',
                        name: '{{random("JS","WORK","Random Label","Testing","OS","Windows","Linux")}}',
                        color: '{{random("default","primary","success","info","warning","danger")}}'
                    }
                }
            ],
            files: [
                {
                    'repeat(5)': {
                        id: '{{index()}}',
                        code: 'function createElement({ node, style, useInlineStyles, key }) {\
        const { properties, type, tagName, value } = node;\
        if (type === "text") {\
            return value;\
        } else if (tagName) {\
            const TagName = tagName;\
            const childrenCreator = createChildren(style, useInlineStyles);\
            const props = (\
                useInlineStyles\
                    ?\
                    { style: createStyleObject(properties.className, style) }\
                    :\
                    { className: createClassNameString(properties.className) }\
            );\
            const children = childrenCreator(node.children);\
            return &lt;TagName key={key} {...props}&gt;{children}&lt;/TagName&gt;;\
        }\
    }',
                        lang: 'javascript'
                    }
                }
            ]
        }
    }
]