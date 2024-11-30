# Define variables for directories
FUNCTIONS_DIR=functions
HOSTING_DIR=hosting

# Define the default target
.PHONY: start
start: lint-functions build emulators

# Target to lint only functions
.PHONY: lint-functions
lint-functions:
	npm --prefix $(FUNCTIONS_DIR) run lint

# Target to build both functions and hosting
.PHONY: build
build:
	npm --prefix $(FUNCTIONS_DIR) run build
	npm --prefix $(HOSTING_DIR) run build || echo "No build script for hosting, skipping..."

# Target to start Firebase emulators
.PHONY: emulators
emulators:
	firebase emulators:start
