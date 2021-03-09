// #1
class Checker implements Comparator<Player> {
	public int compare(Player a, Player b) {
        if (a.score < b.score) {
            return 1;
        } else if( a.score == b.score) {
            // Will fail for test case:
            // 'ab 8'
            // 'aab 8'
            int asciiA = (int) a.name.charAt(0);
            int asciiB = (int) b.name.charAt(0);
            
            if (asciiA < asciiB) {
                return -1;
            } else if (asciiA < asciiB) {
                return 0;
            } else {
                return 1;
            }
        } else {
            return -1;
        }
    }
}

// #2
class Checker implements Comparator<Player> {
	public int compare(Player a, Player b) {
        if (a.score < b.score) {
            return 1;
        } else if( a.score == b.score) {
            return a.name.compareTo(b.name);
        } else {
            return -1;
        }
    }
}