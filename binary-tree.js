/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

	minDepth(depth = 0) {
		let queue = [ this.root ];
		if (!queue[0]) {
			return depth;
		}
		while (queue.length) {
			const current = queue.shift();
			depth++;
			if (current.left) {
				queue.push(current.left);
			}
			if (current.right) {
				queue.push(current.right);
			} else return depth;
		}
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

	maxDepth() {
		if (!this.root) return 0;
		function goDeeper(node) {
			if (!node.left && !node.right) return 1;
			if (!node.left) return goDeeper(node.right) + 1;
			if (!node.right) return goDeeper(node.left) + 1;
			return Math.max(goDeeper(node.left), goDeeper(node.right)) + 1;
		}
		return goDeeper(this.root);
	}
	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum() {
		let sum = 0;
		if (!this.root) return 0;
		function sumPaths(node) {
			if (!node) return 0;
			const left = sumPaths(node.left);
			const right = sumPaths(node.right);
			sum = Math.max(sum, node.val + left + right);
			return Math.max(left + node.val, right + node.val);
		}

		sumPaths(this.root);
		return sum;
	}

	/** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound) {
		if (!this.root) return null;
		let queue = [ this.root ];
		let val = null;

		while (queue.length) {
			let current = queue.shift();
			if (val === null && current.val > lowerBound) {
				val = current.val;
			}
			if (current.val > lowerBound && current.val < val) {
				val = current.val;
			}
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}
		return val;
	}
}

module.exports = { BinaryTree, BinaryTreeNode };
