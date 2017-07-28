// Please use http://beta.json-generator.com/ to regenerate the data
[
    {
        'repeat(50, 100)': {
            id: '{{index(1)}}',
            isPublic: '{{bool()}}',
            name: '{{lorem(5, "words")}}',
            picture: 'http://placehold.it/32x32',
            description: '{{lorem(10, "words")}}',
            created: '{{date(new Date(2014, 0, 1), new Date()).getTime()}}',
            updated: '{{date(new Date(2014, 0, 1), new Date()).getTime()}}',
            category:'{{random("category-1","category-2","category-3","category-4","category-5")}}',
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
                        name: '{{lorem(5, "words")}}',
                        code: '{{lorem(10)}}',
                        lang: 'javascript'
                    }
                }
            ]
        }
    }
]