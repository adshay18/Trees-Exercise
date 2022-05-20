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

	countEvens(count = 0) {
		let queue = [ this.root ];
		while (queue.length) {
			const current = queue.shift();
			if (current !== null) {
				if (current.val % 2 === 0) {
					count++;
				}
				for (let child of current.children) {
					queue.push(child);
				}
			}
		}
		return count;
	}

	/** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

	numGreater(lowerBound, count = 0) {
		let queue = [ this.root ];
		while (queue.length) {
			const current = queue.shift();
			if (current !== null) {
				if (current.val > lowerBound) {
					count++;
				}
				for (let child of current.children) {
					queue.push(child);
				}
			}
		}
		return count;
	}
}

module.exports = { Tree, TreeNode };
