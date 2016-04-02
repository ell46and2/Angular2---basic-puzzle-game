System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n\t\t<section class=\"setup\">\n\t\t\t<h2>Game Setup</h2>\n\t\t\tEnter your name please:\n\t\t\t<input type=\"text\" #name (keyup)=\"0\">\n\t\t</section>\n\t\t<section\n\t\t [ngClass] = \"{\n\t\t \tpuzzle: true,\n\t\t \tsolved: switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number\n\t\t }\"\n\t\t [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n\t\t\t<h2>\n\t\t\t\tThe Puzzle | {{switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number ? 'SOLVED' : 'NOT SOLVED'}}\n\t\t\t</h2>\n\t\t\t<p>Ok, welcome <span class=\"name\">{{name.value}}</span></p>\n\t\t\t<p>Guess the pattern, enter a one or zero for each of the 4 switches.</p>\n\t\t\t<br />\n\t\t\tSwitch 1:\n\t\t\t<input type=\"text\" #switch1 (keyup)=\"0\"><br />\n\t\t\tSwitch 2:\n\t\t\t<input type=\"text\" #switch2 (keyup)=\"0\"><br />\n\t\t\tSwitch 3:\n\t\t\t<input type=\"text\" #switch3 (keyup)=\"0\"><br />\n\t\t\tSwitch 4:\n\t\t\t<input type=\"text\" #switch4 (keyup)=\"0\"><br />\n\t\t</section>\n\t\t<h2 [hidden]=\"switch1.value != switch1Number || switch2.value != switch2Number || switch3.value != switch3Number || switch4.value != switch4Number\">Congratulations {{name.value}}, you did it!</h2>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0NBO2dCQUFBO2dCQWdCQSxDQUFDO2dCQVZBLGtDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUUvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDN0YsQ0FBQztnQkE5Q0Y7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDWCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLDR6Q0E0QlQ7cUJBQ0QsQ0FBQzs7bUNBQUE7Z0JBa0JGLHNCQUFDO1lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtZQWhCRCw2Q0FnQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCAoe1xuXHRzZWxlY3RvcjogJ215LXB1enpsZScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuXHRcdFx0PGgyPkdhbWUgU2V0dXA8L2gyPlxuXHRcdFx0RW50ZXIgeW91ciBuYW1lIHBsZWFzZTpcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICNuYW1lIChrZXl1cCk9XCIwXCI+XG5cdFx0PC9zZWN0aW9uPlxuXHRcdDxzZWN0aW9uXG5cdFx0IFtuZ0NsYXNzXSA9IFwie1xuXHRcdCBcdHB1enpsZTogdHJ1ZSxcblx0XHQgXHRzb2x2ZWQ6IHN3aXRjaDEudmFsdWUgPT0gc3dpdGNoMU51bWJlciAmJiBzd2l0Y2gyLnZhbHVlID09IHN3aXRjaDJOdW1iZXIgJiYgc3dpdGNoMy52YWx1ZSA9PSBzd2l0Y2gzTnVtYmVyICYmIHN3aXRjaDQudmFsdWUgPT0gc3dpdGNoNE51bWJlclxuXHRcdCB9XCJcblx0XHQgW25nU3R5bGVdPVwie2Rpc3BsYXk6IG5hbWUudmFsdWUgPT09ICcnID8gJ25vbmUnIDogJ2Jsb2NrJ31cIj5cblx0XHRcdDxoMj5cblx0XHRcdFx0VGhlIFB1enpsZSB8IHt7c3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyID8gJ1NPTFZFRCcgOiAnTk9UIFNPTFZFRCd9fVxuXHRcdFx0PC9oMj5cblx0XHRcdDxwPk9rLCB3ZWxjb21lIDxzcGFuIGNsYXNzPVwibmFtZVwiPnt7bmFtZS52YWx1ZX19PC9zcGFuPjwvcD5cblx0XHRcdDxwPkd1ZXNzIHRoZSBwYXR0ZXJuLCBlbnRlciBhIG9uZSBvciB6ZXJvIGZvciBlYWNoIG9mIHRoZSA0IHN3aXRjaGVzLjwvcD5cblx0XHRcdDxiciAvPlxuXHRcdFx0U3dpdGNoIDE6XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiPjxiciAvPlxuXHRcdFx0U3dpdGNoIDI6XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMiAoa2V5dXApPVwiMFwiPjxiciAvPlxuXHRcdFx0U3dpdGNoIDM6XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiPjxiciAvPlxuXHRcdFx0U3dpdGNoIDQ6XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoNCAoa2V5dXApPVwiMFwiPjxiciAvPlxuXHRcdDwvc2VjdGlvbj5cblx0XHQ8aDIgW2hpZGRlbl09XCJzd2l0Y2gxLnZhbHVlICE9IHN3aXRjaDFOdW1iZXIgfHwgc3dpdGNoMi52YWx1ZSAhPSBzd2l0Y2gyTnVtYmVyIHx8IHN3aXRjaDMudmFsdWUgIT0gc3dpdGNoM051bWJlciB8fCBzd2l0Y2g0LnZhbHVlICE9IHN3aXRjaDROdW1iZXJcIj5Db25ncmF0dWxhdGlvbnMge3tuYW1lLnZhbHVlfX0sIHlvdSBkaWQgaXQhPC9oMj5cblx0YFxufSlcblxuZXhwb3J0IGNsYXNzIFB1enpsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHN3aXRjaDFOdW1iZXI6IG51bWJlcjtcblx0c3dpdGNoMk51bWJlcjogbnVtYmVyO1xuXHRzd2l0Y2gzTnVtYmVyOiBudW1iZXI7XG5cdHN3aXRjaDROdW1iZXI6IG51bWJlcjtcblxuXHRuZ09uSW5pdCgpOmFueSB7XG5cdFx0dGhpcy5zd2l0Y2gxTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcblx0XHR0aGlzLnN3aXRjaDJOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXHRcdHRoaXMuc3dpdGNoM051bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cdFx0dGhpcy5zd2l0Y2g0TnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcblxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMU51bWJlciwgdGhpcy5zd2l0Y2gyTnVtYmVyLCB0aGlzLnN3aXRjaDNOdW1iZXIsIHRoaXMuc3dpdGNoNE51bWJlcik7XG5cdH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
