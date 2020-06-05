let redirections = {
    // "/SOURCE (BROKEN) URL without trailing slash":"/DESTINATION (CORRECT) URL with slash"
    "/learn/intellij-plugin-old":"/learn/tools-ides/setting-up-intellij-idea/",
    "/source3":"/why/",

    "/1.1/learn/tools-ides/setting-up-visual-studio-code":"/1.1/learn/vscode-plugin/",
    "/1.1/learn/setting-up-visual-studio-code":"/1.1/learn/vscode-plugin/",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code":"/1.0/learn/vscode-plugin/",
    "/1.0/learn/setting-up-visual-studio-code":"/1.0/learn/vscode-plugin/",
    "/0.991/learn/tools-ides/setting-up-visual-studio-code":"/0.991/learn/vscode-plugin/",
    "/0.991/learn/setting-up-visual-studio-code":"/0.991/learn/vscode-plugin/",
    "/1.1/learn/setting-up-visual-studio-code/language-intelligence":"/1.1/learn/vscode-plugin/language-intelligence",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/language-intelligence":"/1.1/learn/vscode-plugin/language-intelligence",
    "/1.0/learn/setting-up-visual-studio-code/language-intelligence":"/1.0/learn/vscode-plugin/language-intelligence",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/language-intelligence":"/1.0/learn/vscode-plugin/language-intelligence",
    "/0.991/learn/setting-up-visual-studio-code/language-intelligence":"/0.991/learn/vscode-plugin/language-intelligence",
    "/0.991/learn/tools-ides/setting-up-visual-studio-code/language-intelligence":"/0.991/learn/vscode-plugin/language-intelligence",
    "/1.1/learn/setting-up-visual-studio-code/run-and-debug":"/1.1/learn/vscode-plugin/run-and-debug/",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/run-and-debug":"/1.1/learn/vscode-plugin/run-and-debug/",
    "/1.0/learn/setting-up-visual-studio-code/run-and-debug":"/1.0/learn/vscode-plugin/run-and-debug/",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/run-and-debug":"/1.0/learn/vscode-plugin/run-and-debug/",
    "/0.991/learn/setting-up-visual-studio-code/run-and-debug":"/0.991/learn/vscode-plugin/run-and-debug/",
    "/0.991/learn/tools-ides/setting-up-visual-studio-code/run-and-debug":"/0.991/learn/vscode-plugin/run-and-debug/",
    "/1.1/learn/setting-up-visual-studio-code/graphical-editor":"/1.1/learn/vscode-plugin/graphical-editor/",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/graphical-editor":"/1.1/learn/vscode-plugin/graphical-editor/",
    "/1.0/learn/setting-up-visual-studio-code/graphical-editor":"/1.0/learn/setting-up-visual-studio-code/graphical-editor/",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/graphical-editor":"/1.0/learn/vscode-plugin/graphical-editor/",
    "/0.991/learn/setting-up-visual-studio-code/graphical-editor":"/0.991/learn/vscode-plugin/graphical-editor/",
    "/0.991/learn/tools-ides/setting-up-visual-studio-code/graphical-editor":"/0.991/learn/vscode-plugin/graphical-editor/",
    "/1.1/learn/setting-up-visual-studio-code/graphical-editor":"/1.1/learn/vscode-plugin/graphical-editor/",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/graphical-editor":"/1.1/learn/vscode-plugin/graphical-editor/",
    "/1.0/learn/setting-up-visual-studio-code/graphical-editor":"/1.0/learn/vscode-plugin/graphical-editor/",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/graphical-editor":"/1.0/learn/vscode-plugin/graphical-editor/",
    "/0.991/learn/setting-up-visual-studio-code/graphical-editor":"/0.991/learn/vscode-plugin/graphical-editor/",
    "/0.991/learn/tools-ides/setting-up-visual-studio-code/graphical-editor":"/0.991/learn/vscode-plugin/graphical-editor/",
    "/1.1/learn/setting-up-visual-studio-code/documentation-viewer":"/1.1/learn/vscode-plugin/documentation-viewer",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/documentation-viewer":"/1.1/learn/vscode-plugin/documentation-viewer/",
    "/1.0/learn/setting-up-visual-studio-code/documentation-viewer":"/1.0/learn/vscode-plugin/documentation-viewer/",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/documentation-viewer":"/1.0/learn/vscode-plugin/documentation-viewer/",
    "/0.991/learn/setting-up-visual-studio-code/documentation-viewer":"/0.991/learn/vscode-plugin/documentation-viewer/",
    "/0.991/learn/tools-ides/setting-up-visual-studio-code/documentation-viewer":"/0.991/learn/vscode-plugin/documentation-viewer/",
    "/1.1/learn/setting-up-visual-studio-code/run-all-tests":"/1.1/learn/vscode-plugin/run-all-tests",
    "/1.1/learn/tools-ides/setting-up-visual-studio-code/run-all-tests":"/1.1/learn/vscode-plugin/run-all-tests",
    "/1.0/learn/setting-up-visual-studio-code/run-all-tests":"/1.0/learn/vscode-plugin/run-all-tests/",
    "/1.0/learn/tools-ides/setting-up-visual-studio-code/run-all-tests":"/1.0/learn/vscode-plugin/run-all-tests/",
    "/0.991/learn/setting-up-visual-studio-code/run-all-tests":"/0.991/learn/vscode-plugin/run-all-tests",
    "/0.991/learn/tools-ides/setting-up-visual-studio-code/run-all-tests/":"/0.991/learn/vscode-plugin/run-all-tests",
    "/1.1/learn/tools-ides/setting-up-intellij-idea":"/1.1/learn/intellij-plugin/",
    "/1.1/learn/setting-up-intellij-idea":"/1.1/learn/intellij-plugin/",
    "/1.0/learn/tools-ides/setting-up-intellij-idea":"/1.0/learn/intellij-plugin/",
    "/1.0/learn/setting-up-intellij-idea":"/1.0/learn/intellij-plugin/",
    "/0.991/learn/tools-ides/setting-up-intellij-idea":"/0.991/learn/intellij-plugin/",
    "/0.991/learn/setting-up-intellij-idea":"/0.991/learn/intellij-plugin/",
    "/1.1/learn/setting-up-intellij-idea/using-the-intellij-plugin":"/1.1/learn/intellij-plugin/using-the-intellij-plugin/",
    "/1.1/learn/tools-ides/setting-up-intellij-idea/using-the-intellij-plugin":"/1.1/learn/intellij-plugin/using-the-intellij-plugin/",
    "/1.0/learn/setting-up-intellij-idea/using-the-intellij-plugin":"/1.0/learn/intellij-plugin/using-the-intellij-plugin/",
    "/1.0/learn/tools-ides/setting-up-intellij-idea/using-the-intellij-plugin":"/1.0/learn/intellij-plugin/using-the-intellij-plugin/",
    "/0.991/learn/setting-up-intellij-idea/using-the-intellij-plugin":"/0.991/learn/intellij-plugin/using-the-intellij-plugin/",
    "/0.991/learn/tools-ides/setting-up-intellij-idea/using-the-intellij-plugin":"/0.991/learn/intellij-plugin/using-the-intellij-plugin/",
    "/1.1/learn/setting-up-intellij-idea/using-intellij-plugin-features":"1.1/learn/intellij-plugin/using-intellij-plugin-features/",
    "/1.1/learn/tools-ides/setting-up-intellij-idea/using-intellij-plugin-features":"/1.1/learn/intellij-plugin/using-intellij-plugin-features/",
    "/1.0/learn/setting-up-intellij-idea/using-intellij-plugin-features":"/1.0/learn/intellij-plugin/using-intellij-plugin-features/",
    "/1.0/learn/tools-ides/setting-up-intellij-idea/using-intellij-plugin-features":"/1.0/learn/intellij-plugin/using-intellij-plugin-features/",
    "/0.991/learn/setting-up-intellij-idea/using-intellij-plugin-features":"/0.991/learn/intellij-plugin/using-intellij-plugin-features/",
    "/0.991/learn/tools-ides/setting-up-intellij-idea/using-intellij-plugin-features":"/0.991/learn//intellij-plugin/using-intellij-plugin-features/",
    "/1.1/learn/using-the-cli-tools":"/1.1/learn/cli-commands/",
    "/1.0/learn/using-the-cli-tools":"/1.0/learn/cli-commands/",
    "/0.991/learn/using-the-cli-tools":"/0.991/learn/cli-commands/",
    "/1.1/learn/keeping-ballerina-up-to-date":"/1.1/learn/how-to-keep-ballerina-up-to-date",
    "/1.0/learn/keeping-ballerina-up-to-date":"/1.0/learn/how-to-keep-ballerina-up-to-date/",
    "/0.991/learn/keeping-ballerina-up-to-date":"/0.991/learn/how-to-keep-ballerina-up-to-date/",
    "/1.1/learn/using-the-openapi-tools":"/1.1/learn/how-to-use-openapi-tools",
    "/1.0/learn/using-the-openapi-tools":"/1.0/learn/how-to-use-openapi-tools/",
    "/0.991/learn/using-the-openapi-tools":"/0.991/learn/how-to-use-openapi-tools/",
    "/1.1/learn/generating-ballerina-code-for-protocol-buffer-definitions":"/1.1/learn/how-to-generate-code-for-protocol-buffers/",
    "/1.0/learn/generating-ballerina-code-for-protocol-buffer-definitions":"/1.0/learn/how-to-generate-code-for-protocol-buffers/",
    "/0.991/learn/generating-ballerina-code-for-protocol-buffer-definitions":"/0.991/learn/how-to-generate-code-for-protocol-buffers",
    "/1.1/learn/structuring-ballerina-code":"/1.1/learn/how-to-structure-ballerina-code/",
    "/1.0/learn/structuring-ballerina-code":"/1.0/learn/how-to-structure-ballerina-code",
    "/0.991/learn/structuring-ballerina-code":"/0.991/learn/how-to-structure-ballerina-code/",
    "/1.1/learn/documenting-ballerina-code":"/1.1/learn/how-to-document-ballerina-code/",
    "/1.0/learn/documenting-ballerina-code":"/1.0/learn/how-to-document-ballerina-code/",
    "/0.991/learn/documenting-ballerina-code":"/0.991/learn/how-to-document-ballerina-code",
    "/1.1/learn/coding-conventions/":"/1.1/learn/style-guide/",
    "/1.0/learn/coding-conventions":"/1.0/learn/style-guide/",
    "/0.991/learn/coding-conventions":"/0.991/learn/style-guide/",
    "/1.1/learn/running-ballerina-code":"/1.1/learn/how-to-run-ballerina-programs/",
    "/1.0/learn/running-ballerina-code":"/1.0/learn/how-to-run-ballerina-programs/",
    "/0.991/learn/running-ballerina-code":"/0.991/learn/how-to-run-ballerina-programs/",
    "/1.1/learn/publishing-modules-to-ballerina-central":"/1.1/learn/how-to-publish-modules/",
    "/1.0/learn/publishing-modules-to-ballerina-central":"/1.0/learn/how-to-publish-modules/",
    "/0.991/learn/publishing-modules-to-ballerina-central":"/0.991/learn/how-to-publish-modules/",
    "/1.1/learn/deploying-ballerina-programs-in-the-cloud":"/1.1/learn/how-to-deploy-ballerina-programs-in-cloud/",
    "/1.0/learn/deploying-ballerina-programs-in-the-cloud":"/1.0/learn/how-to-deploy-ballerina-programs-in-cloud/",
    "/0.991/learn/deploying-ballerina-programs-in-the-cloud":"/0.991/learn/how-to-deploy-ballerina-programs-in-cloud/",
    "/1.1/learn/observing-ballerina-code":"/1.1/learn/how-to-observe-ballerina-services/",
    "/1.0/learn/observing-ballerina-code":"/1.0/learn/how-to-observe-ballerina-services/",
    "/0.991/learn/observing-ballerina-code":"/0.991/learn/how-to-observe-ballerina-services/",
    "/1.1/learn/calling-java-code-from-ballerina":"/1.1/learn/how-to-call-java-code-from-ballerina/",
    "/1.0/learn/calling-java-code-from-ballerina":"/1.0/learn/how-to-call-java-code-from-ballerina/",
    "/0.991/learn/calling-java-code-from-ballerina":"/0.991/learn/how-to-call-java-code-from-ballerina/",
    "/1.1/learn/writing-secure-ballerina-code":"/1.1/learn/how-to-write-secure-ballerina-code/",
    "/1.0/learn/writing-secure-ballerina-code":"/1.0/learn/how-to-write-secure-ballerina-code/",
    "/0.991/learn/writing-secure-ballerina-code":"/0.991/learn/how-to-write-secure-ballerina-code/",
    "/1.1/learn/testing-ballerina-code":"/1.1/learn/how-to-test-ballerina-code/",
    "/1.0/learn/testing-ballerina-code":"/1.0/learn/how-to-test-ballerina-code/",
    "/0.991/learn/testing-ballerina-code":"/0.991/learn/how-to-test-ballerina-code/",
    "/1.1/learn/extending-with-compiler-extensions":"/1.1/learn/how-to-extend-ballerina/",
    "/1.0/learn/extending-with-compiler-extensions":"/1.0/learn/how-to-extend-ballerina/",
    "/0.991/learn/extending-with-compiler-extensions":"/0.991/learn/how-to-extend-ballerina/",
};
