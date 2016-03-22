System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Task;
    return {
        setters:[],
        execute: function() {
            Task = (function () {
                function Task(description, id) {
                    this.description = description;
                    this.id = id;
                    this.done = false;
                }
                return Task;
            }());
            exports_1("Task", Task);
        }
    }
});
//# sourceMappingURL=task.model.js.map