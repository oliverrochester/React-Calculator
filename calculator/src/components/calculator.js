import React, { Component } from 'react';
import Button from "./calcBtn";
import Display from "./calcDisplay";
import Memory from "./memory";
class Table extends Component {
    state = {
        value: [
            [1, 2, 3, "/"],
            [4, 5, 6, "-"],
            [7, 8, 9, "+"],
            [0, "=", "*", "clear"]
        ],
        disp: "",
        memory: [],
    }

    render() {
        return (
            <div style={{
                backgroundColor: "lightblue",
                width: "40vw",
                height: "65vh",
                margin: "auto",
                borderRadius: "5px",
            }}>
                <Display value={this.state.disp}></Display>
                {this.createTbl(this.state.value)}
                <Memory value={this.state.disp}></Memory>
            </div>
        );
    }

    createCell(value) {
        return (
            value.map((number) =>
                <td><Button onclick={this.onInput.bind(this)} value={number}> </Button></td>
            )
        )

    }

    createTbl(tblArr) {
        return tblArr.map((row) => {
            return (
                <tr style={{

                }}>
                    {this.createCell(row)}
                </tr>
            )
        })
    }

    onInput(e) {
        console.log(e)
        if (e === "=") {
            let old = this.state.disp;
            let hold = eval(this.state.disp);
            let mem = this.state.memory;
            mem.push(old + "=" + hold);

            this.setState({
                disp: hold,
                memory: mem
            });
            console.log(hold)


        }
        else if (e === "clear") {
            this.setState({
                disp: ""
            })
        }
        else if (isNaN(e)) {
            this.setState({
                disp: this.state.disp + "" + e
            })
        }
        else {
            if (!isNaN(this.state.disp)) {
                this.setState({
                    disp: e
                })
            } else {
                this.setState({
                    disp: this.state.disp + "" + e
                })
            }
        }


    }



}

export default Table;