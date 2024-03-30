class Stack {
  constructor(props) {
    this.items = {}
    this.lenght = 0
  }

  push(node) {
    this.items[this.lenght] = node
    this.lenght++
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }
    this.lenght--
    //拿到删除的元素
    const r = this.items[this.lenght]
    // 随后删除当前元素
    delete this.items[this.items]
    //返回删除后的元素
    return r
  }

  // 获取栈顶节点
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.items[this.lenght - 1]
  }

  isEmpty() {
    return this.lenght === 0
  }

  clear() {
    this.items = {}
    this.lenght = 0
  }
}

const stack = new Stack()
stack.push({a: 1})
stack.push({b: 2})
stack.push({c: 3})
console.log(stack)