/** TreeNode: node for a general tree. */

class TreeNode {
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	/** sumValues(): add up all of the values in the tree. */

	sumValues(total = 0) {
		let queue = [ this.root ];
		console.log(queue, queue.length);
		while (queue.length) {
			const current = queue.shift();
			if (current !== null) {
				total += current.val;
				for (let child of current.children) {
					queue.push(child);
				}
			}
		}
		return total;
	}

	/** countEvens(): count all of the nodes in the tree with even values. */

	countEvens() {}

	/** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

	numGreater(lowerBound) {}
}

module.exports = { Tree, TreeNode };
