({
    name: "Thingsboard", // Category Name
    description: "Connect to Thingsboard Mqtt",
    author: "1EN",
    category: "Communication",
    version: "1.0.1",
    icon: "/static/icon.png", // Category icon
    color: "#E67E22", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="Token">
                    <value name="token">
                        <shadow type="text">
                            <field name="TEXT">--your-token--</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "Publish",
    ]
});